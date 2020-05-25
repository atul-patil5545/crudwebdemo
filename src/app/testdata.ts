
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb() {
        const bookDetails = [
            {id: 100, name: 'Atul', category: 'Angular', writer: 'Atul Patil'},
            {id: 101, name: 'Rajesh', category: 'Angular', writer: 'Rajesh Patil'}
            // {id: 102, name: 'Rahul', category: 'Angular', writer: 'Rahul Patil'}
        ];
        return {books: bookDetails};
    }
}
