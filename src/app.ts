showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt!.innerText = `Hello from ${name}`;
}

enum Category {
    Software,
}

interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
}

interface Magazine {
    title: string;
    publisher: string;
}

const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' }
];
class Shelf {
    private readonly items: (Book | Magazine)[];

    constructor(newItems: (Book | Magazine)[] = []) {
        this.items = newItems;
    }

    add(item: Book | Magazine): void {
        this.items.push(item);
    }

    getFirst(): Book | Magazine | undefined {
        return this.items[0];
    }

    printTitles(): void {
        const titles: string[] = this.items.map(item => item.title);
        console.log(titles);
    }
    find(id: number): Book | Magazine | undefined;
    find(author: string): (Book | Magazine)[];
    find(search: number | string): (Book | Magazine) | (Book | Magazine)[] | undefined {
        if (typeof search === 'number') {
            return this.items.find(item => 'id' in item && item.id === search) as Book | Magazine | undefined;
        } else {
            return this.items.filter(item => 'author' in item && item.author === search) as (Book | Magazine)[];
        }
    }
}

const firstShelf = new Shelf([...inventory, ...magazines]);
firstShelf.printTitles();
const foundBookId = firstShelf.find(11);
console.log(foundBookId);
const foundBookAuthor = firstShelf.find('A. B.');
console.log(foundBookAuthor);
const newBook: Book = { id: 14, title: 'TypeScript', author: 'Bob', available: true, category: Category.Software };
console.log(newBook);
const firstItem = firstShelf.getFirst();
console.log(firstItem);
