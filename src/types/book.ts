export interface Book {
  id: string;
  title: string;
  author: string;
  shelf: number;
  row: number;
  available: boolean;
  dueDate?: string;
  renewalDate: string;
  coverUrl: string;
  borrowerId?: string;
  description: string; 
}

export interface BookingDetails {
  bookId: string;
  userId: string;
  borrowDate: string;
  dueDate: string;
}