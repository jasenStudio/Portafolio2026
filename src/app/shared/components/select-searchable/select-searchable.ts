import { Component, computed, ElementRef, inject, input, model, output, signal } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';

export interface SelectSearchableOption {
  value: string;
  label: string;
}

export interface SelectSearchableGroup {
  label: string;
  items: SelectSearchableOption[];
}

@Component({
  selector: 'app-select-searchable',
  templateUrl: './select-searchable.html',
  styleUrl: './select-searchable.css',
  host: {
    '(document:click)': 'handleDocumentClick($event)',
  },
})
export class SelectSearchable implements FormValueControl<string> {
  private readonly elementRef = inject(ElementRef);

  readonly value = model<string>('');
  readonly options = input.required<SelectSearchableGroup[]>();
  readonly placeholder = input('Buscar...');
  readonly emptyLabel = input<string>();
  readonly disabled = input(false);
  readonly readonly = input(false);
  readonly touched = input(false);
  readonly touch = output<void>();

  protected readonly query = signal('');
  protected readonly isOpen = signal(false);
  protected readonly activeIndex = signal(-1);

  private readonly listboxId = `listbox-${Math.random().toString(36).slice(2)}`;

  protected readonly filteredGroups = computed(() => {
    const q = this.query().toLowerCase().trim();
    if (!q) return this.options();
    return this.options()
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.label.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0);
  });

  protected readonly totalMatches = computed(() => {
    const groups = this.filteredGroups();
    return groups.reduce((sum, g) => sum + g.items.length, 0);
  });

  protected readonly selectedLabel = computed(() => {
    const val = this.value();
    if (!val) return '';
    for (const group of this.options()) {
      const option = group.items.find((item) => item.value === val);
      if (option) return option.label;
    }
    return '';
  });

  protected readonly canClear = computed(() => this.value() !== '');

  protected readonly activeId = computed(() => {
    const idx = this.activeIndex();
    if (idx < 0) return null;
    return this.optionId(idx);
  });

  protected readonly flatOptions = computed(() => {
    const result: { option: SelectSearchableOption; globalIndex: number }[] = [];
    let idx = 0;
    for (const group of this.filteredGroups()) {
      for (const item of group.items) {
        result.push({ option: item, globalIndex: idx++ });
      }
    }
    return result;
  });

  protected readonly listboxIdValue = this.listboxId;

  protected optionId(index: number): string {
    return `${this.listboxId}-option-${index}`;
  }

  protected handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.query.set(target.value);
    this.isOpen.set(true);
    this.activeIndex.set(-1);
  }

  protected handleKeydown(event: KeyboardEvent): void {
    const flat = this.flatOptions();
    const hasEmpty = !!this.emptyLabel();
    const totalItems = flat.length + (hasEmpty ? 1 : 0);

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        if (!this.isOpen()) {
          this.isOpen.set(true);
        }
        if (this.activeIndex() < totalItems - 1) {
          this.activeIndex.update((i) => i + 1);
        }
        this.scrollToActive();
        break;

      case 'ArrowUp':
        event.preventDefault();
        if (!this.isOpen()) {
          this.isOpen.set(true);
        }
        if (this.activeIndex() > -1) {
          this.activeIndex.update((i) => i - 1);
        }
        this.scrollToActive();
        break;

      case 'Enter':
        event.preventDefault();
        if (!this.isOpen()) {
          this.isOpen.set(true);
          return;
        }
        const idx = this.activeIndex();
        if (idx === -1 && hasEmpty) {
          this.selectEmpty();
        } else if (idx >= 0 && idx < flat.length) {
          this.select(flat[idx].option);
        }
        break;

      case 'Escape':
        event.preventDefault();
        this.close();
        break;

      case 'Home':
        event.preventDefault();
        if (this.isOpen() && totalItems > 0) {
          this.activeIndex.set(-1);
        }
        break;

      case 'End':
        event.preventDefault();
        if (this.isOpen() && totalItems > 0) {
          this.activeIndex.set(totalItems - 1);
        }
        break;
    }
  }

  protected handleDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.close();
    }
  }

  protected select(option: SelectSearchableOption): void {
    this.value.set(option.value);
    this.query.set('');
    this.close();
  }

  protected selectEmpty(): void {
    this.value.set('');
    this.query.set('');
    this.close();
  }

  protected clear(): void {
    this.value.set('');
    this.query.set('');
    this.isOpen.set(false);
  }

  protected toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  protected open(): void {
    this.isOpen.set(true);
    this.activeIndex.set(-1);
  }

  protected close(): void {
    this.isOpen.set(false);
    this.activeIndex.set(-1);
  }

  protected isActive(option: SelectSearchableOption, globalIndex: number): boolean {
    return this.activeIndex() === globalIndex;
  }

  protected getGlobalIndex(group: SelectSearchableGroup, option: SelectSearchableOption): number {
    let idx = 0;
    for (const g of this.filteredGroups()) {
      if (g === group) {
        const itemIdx = g.items.indexOf(option);
        return idx + itemIdx;
      }
      idx += g.items.length;
    }
    return -1;
  }

  private scrollToActive(): void {
    if (typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => {
        const activeEl = document.getElementById(this.activeId() || '');
        if (activeEl) {
          activeEl.scrollIntoView({ block: 'nearest' });
        }
      });
    }
  }
}
