import {MatPaginatorIntl} from '@angular/material/paginator';
import {Injectable} from '@angular/core';

@Injectable()
export class CustomMatPaginator extends MatPaginatorIntl {
    getAndInitTranslations() {
        this.itemsPerPageLabel = "Pokemons per page";
        this.changes.next();
    }

    constructor() {
        super();  
        this.getAndInitTranslations();
    }

    override getRangeLabel = (page: number, pageSize: number, length: number) =>  {
        if (length === 0 || pageSize === 0) return `0 / ${length}`;
        
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return `${startIndex + 1} - ${endIndex} / ${length}`;
    }
}