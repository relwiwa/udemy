package jsfbeans;
	
import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.model.DataModel;
import javax.faces.model.ListDataModel;
	
@ManagedBean
@SessionScoped

public class BookShelf implements Serializable{

       private static final long serialVersionUID = 1L;
       private static final ArrayList<Book> books; 

       static{
           books = new ArrayList<Book>();
           Book book1 = new Book();
           book1.setAuthor("Johann Wolfgang von Goethe");
           book1.setName("Faust");
           book1.setLanguage("de");
           // Date beginnt bei 1900
           book1.setPublishDate(new Date(1829 - 1900, 1, 19));
           book1.setPrice(5.00);
           books.add(book1);

           Book book2 = new Book();
           book2.setAuthor("William Shakespeare");
           book2.setName("Romeo und Julia");
           book2.setLanguage("en");
           book2.setPublishDate(new Date(1597 - 1900, 1, 1));
           book2.setPrice(8.49);
           books.add(book2);

           Book book3 = new Book();
           book3.setAuthor("Stephen King");
           book3.setName("Es - It");
           book3.setLanguage("en");
           book3.setPublishDate(new Date(1986 - 1900, 1, 1));
           book3.setPrice(14.99);
           books.add(book3);
       };

       transient
       private Book inedit;
       private DataModel<Book> booksDataModel;
       private ArrayList<Book> rawBooks;
       
       public DataModel<Book> getBooks() {
    	   if (booksDataModel == null) {
    		   rawBooks = new ArrayList<Book>();
    		   rawBooks.addAll(books);
    		   booksDataModel = new ListDataModel<Book>(rawBooks);
    	   }
    	   
    	   return booksDataModel;
       }
           
		public Book getInedit() {
			return inedit;
		}

		public void setInedit(Book inedit) {
			this.inedit = inedit;
		}
		
		public String prepareNewBook() {
			inedit = new Book();
			return "create";
		}

		public String prepareBookEdit(Book book) {
			inedit = book;
			/* Regel-basierte Navigation via faces-config.xml */
			return "update";
		}		
		
       public String saveBook() {
    	   if (!rawBooks.contains(inedit)) {
    		   rawBooks.add(inedit);
    		   booksDataModel = new ListDataModel<Book>(rawBooks);
    	   }
    	   inedit = null;
    	   return "index";
       }
		
}