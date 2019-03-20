package jsfbeans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@ManagedBean
@RequestScoped
public class Book {
	private String author;
	private String name;
	private String publishDate;
	private String price;
	private String[] emailadresses;
	
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPublishDate() {
		return publishDate;
	}
	public void setPublishDate(String publishDate) {
		this.publishDate = publishDate;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String[] getEmailadresses() {
		return emailadresses;
	}
	public void setEmailadresses(String[] emailadresses) {
		this.emailadresses = emailadresses;
	}
	
	public String save() {
		// TODO: abspeichern
		// Zurückgegeben wird Name der Datei, auf die weitergeleitet werden soll
		// .xhtml-Endung ist nicht notwendig
		return "index";
	}
}
