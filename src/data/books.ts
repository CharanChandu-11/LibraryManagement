import { Book } from '../types/book';

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    shelf: 1,
    row: 2,
    available: true,
    renewalDate: '2024-04-15',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300&h=400',
    description: 'A story of decadence and excess, Gatsby explores the American Dream in the 1920s.'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    shelf: 1,
    row: 3,
    available: false,
    dueDate: '2024-03-25',
    renewalDate: '2024-04-20',
    coverUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=300&h=400',
    description: 'A powerful story of racial injustice and the loss of innocence in the American South.'
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    shelf: 2,
    row: 1,
    available: true,
    renewalDate: '2024-04-10',
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=300&h=400',
    description: 'Orwell\'s dystopian masterpiece about surveillance, truth, and power.'
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    shelf: 2,
    row: 3,
    available: true,
    renewalDate: '2024-04-15',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=300&h=400',
    description: 'A classic romance about the relationship between Elizabeth Bennet and Mr. Darcy.'
  },
  {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    shelf: 3,
    row: 2,
    available: true,
    renewalDate: '2024-04-18',
    coverUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=300&h=400',
    description: 'Holden Caulfield\'s iconic journey through New York City.'
  },
  {
    id: '6',
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    shelf: 3,
    row: 4,
    available: true,
    renewalDate: '2024-04-22',
    coverUrl: 'data:image/jpeg;base64,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',
    description: 'A masterpiece of magical realism following the Buendía family.'
  },
  {
    id: '7',
    title: 'Moby-Dick',
    author: 'Herman Melville',
    shelf: 4,
    row: 1,
    available: false, 
    dueDate: '2024-03-28',
    renewalDate: '2024-04-25',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcDPjn6p2lWL9q1wvcpC-_PILKo-k9HbGHA&s',
    description: 'The epic tale of Captain Ahab\'s obsession with the white whale.'
  },
  {
    id: '8',
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    shelf: 4,
    row: 2,
    available: true,
    renewalDate: '2024-04-30',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ1XMFMoZv6t1uX_Vu1QYHQHLg17au47lmew&s',
    description: 'A sweeping novel of love and conflict during the Napoleonic Wars.'
  },
  {
    id: '9',
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    shelf: 5,
    row: 3,
    available: false,
    renewalDate: '2024-04-25',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSofJmaCB9lOj46PpWW-PlxfkX_kZXS5KwA7A&s',
    description: 'A psychological exploration of morality and guilt in 19th-century Russia.'
  },
  {
    id: '10',
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    shelf: 5,
    row: 4,
    available: true,
    renewalDate: '2024-05-01',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkza4taf--Cn73ODCfRuUt2kCZzZduJ0iysg&s',
    description: 'A story of family, faith, and free will, told through the lives of three brothers.'
  },
  {
    id: '11',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    shelf: 6,
    row: 1,
    available: false,
    dueDate: '2024-03-29',
    renewalDate: '2024-04-26',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGJD0i5eoGWcDb1oVEa3Y5u80SBYGH72_06Q&s',
    description: 'A dystopian vision of a world of technological control and loss of individuality.'
  },
  {
    id: '12',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    shelf: 6,
    row: 2,
    available: true,
    renewalDate: '2024-04-28',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMFoU03252tm-douGTO1oeXnf-eVloZZ4gA&s',
    description: 'Bilbo Baggins embarks on an adventure that changes his life forever.'
  },
  {
    id: '13',
    title: 'The Divine Comedy',
    author: 'Dante Alighieri',
    shelf: 7,
    row: 1,
    available: true,
    renewalDate: '2024-04-30',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVyWRrLtJDa4JzKBW4COpu5O73PgMXWQ8uaQ&s',
    description: 'A journey through Hell, Purgatory, and Paradise, guided by love and faith.'
  },
  {
    id: '14',
    title: 'The Odyssey',
    author: 'Homer',
    shelf: 7,
    row: 2,
    available: false,
    renewalDate: '2024-05-03',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kZ5zYWDQka5I3iEr39Xigh0vgIjc7Z0vjQ&s',
    description: 'The epic tale of Odysseus\'s journey home after the Trojan War.'
  },
  {
    id: '15',
    title: 'The Iliad',
    author: 'Homer',
    shelf: 7,
    row: 3,
    available: false,
    renewalDate: '2024-05-05',
    coverUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttxQtvkSkd1iB7zKQGXqxIJq5e9LpxZDcOQ&s',
    description: 'A timeless story of heroism and tragedy during the Trojan War.'
  }
];
