import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./books";
import {map} from "rxjs/operators";
import {Observable, of} from "rxjs";

const API_KEY = "AIzaSyAtHYlThlvZ5m342xrsb2LTMRtHmRW-9X0";
const API_URL = "https://www.googleapis.com/books/v1/volumes";
const BOOK_FIELDS = 'items(id,volumeInfo(title,subtitle,authors,publishedDate,description,imageLinks(thumbnail)))'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  get_books(text: string, startIndex: number, maxResults: number): Observable<Book[]> {
    let url = API_URL + '?q=' + text + "&startIndex=" + startIndex + "&maxResults=" + maxResults + "&fields=" + BOOK_FIELDS + "&key=" + API_KEY
    return this.http.get<{ items: Book[] }>(url).pipe(map(x => x.items))
  }

  get_wishlist(): Observable<Book[]> {
    return of(this.wishlist)
  }

  removeFromWishlist(id: string) {
    this.wishlist = this.wishlist.filter(book => book.id !== id);
  }

  addToWishlist(book: Book) {
    this.wishlist.unshift(book)
  }

  wishlist: Book[] = [
    {
      id: "KTD8AAAAQBAJ",
      volumeInfo: {
        title: "Where the Hell Is God?",
        authors: ["Richard Leonard"],
        publishedDate: "2010",
        description: "Combines professional insights along with the author's own experience and insights to speculate on how believers can make sense of their Christian faith when confronted with tragedy and suffering.",
        imageLinks: {
          thumbnail: "http://books.google.com/books/content?id=KTD8AAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "Sw75DwAAQBAJ",
      volumeInfo: {
        title: "Wow in the World: The How and Wow of the Human Body",
        subtitle: "From Your Tongue to Your Toes and All the Guts in Between",
        authors: [
          "Mindy Thomas",
          "Guy Raz"
        ],
        publishedDate: "2021-03-02",
        description: "Based on their #1 kids podcast, Wow in the World, hosts Mindy Thomas and Guy Raz take readers on a hilarious, fact-filled, and highly illustrated journey through the human body--covering everything from our toes to our tongues to our brains and our lungs! WHY in the world do I have a belly button? And WHAT in the world does it do? WHEN in the world will my nose stop growing? And HOW in the world does my pee keep flowing? The human body is a fascinating piece of machinery. It's full of mystery, and wonder, and WOW. And it turns out, every single human on the planet has one! Join Mindy Thomas and Guy Raz, hosts of the mega-popular Wow in the World podcast, as they take you on a fact-filled adventure from your toes and your tongues to your brain and your lungs. Featuring hilarious illustrations and filled with facts, jokes, photos, quizzes, and Wow-To experiments, The How and Wow of the Human Body has everything you need to better understand your own walking, talking, barfing, breathing, pooping body of WOW!",
        imageLinks: {
          "thumbnail": "http://books.google.com/books/content?id=Sw75DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
      }
    },
    {
      id: "eaWMDwAAQBAJ",
      volumeInfo: {
        title: "Hire Me, Hollywood!",
        subtitle: "Your Behind-the-Scenes Guide to the Most Exciting - and Unexpected - Jobs in Show Business",
        authors: [
          "Mark Scherzer"
        ],
        publishedDate: "2011-08-18",
        description: "The secret to Stan Lee's writing process The story behind Elmo's giggle What's for lunch on the set of The Walking Dead Squirrel training with Johnny Depp Think you know what it takes to get your favorite TV show on the air every week? (You'd be surprised.) Or what all those people whose names in the credits of the latest blockbuster actually do? (Including the Supervising Digital Colorist?)What better way to find out than from the who's who of Hire Me, Hollywood! Entertainment insiders Mark Scherzer and Keith Fenimore are here to give you a crash course in all things Hollywood through thirty sometimes funny, occasionally racy, and always revealing interviews with such industry experts as: Ryan Randall, Hair Stylist/Makeup Artist (American Idol) Sam Trammell, Actor (Sam Merlotte on HBO's True Blood) Paula Davis, Senior Talent Executive (Conan O'Brien) Mark Steines, Cohost (Entertainment Tonight) Sara Holden, Stunt Woman (House, All My Children, How I Met Your Mother, Iron Man 2) Cecilia Cardwell, On-Set Tutor (Titanic, Little Miss Sunshine, No Ordinary Family) Michael Gelman, Executive Producer (Live! with Regis and Kelly) Whether you've always dreamed of yelling \"Action\" on a major movie set or you'd be thrilled just to get Matthew McConaughey his morning coffee, this book will give you inside scoop from craft service to the director's chair—and every take in between.",
        imageLinks: {
          thumbnail: "http://books.google.com/books/content?id=eaWMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
      }
    }
  ];

}
