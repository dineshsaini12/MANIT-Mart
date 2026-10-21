export const listings = [
  { id: 1, name: "Calculus, Early Transcendentals", category: "Books", price: 420, oldPrice: 780, condition: "Like new", seller: "Aarav · MANIT", emoji: "📚", tone: "lavender", location: "Hostel 3" },
  { id: 2, name: "Study table lamp", category: "Hostel", price: 250, oldPrice: 499, condition: "Good", seller: "Meera · MANIT", emoji: "💡", tone: "peach", location: "Hostel 5" },
  { id: 3, name: "Noise-cancelling headphones", category: "Electronics", price: 1800, oldPrice: 3200, condition: "Great", seller: "Kabir · MANIT", emoji: "🎧", tone: "blue", location: "Hostel 2" },
  { id: 4, name: "Graphing calculator", category: "Electronics", price: 950, oldPrice: 1600, condition: "Like new", seller: "Nisha · MANIT", emoji: "🧮", tone: "mint", location: "Hostel 4" },
  { id: 5, name: "Mechanical keyboard", category: "Electronics", price: 1200, oldPrice: 2100, condition: "Good", seller: "Dev · MANIT", emoji: "⌨️", tone: "yellow", location: "Hostel 1" },
  { id: 6, name: "Desk organiser set", category: "Hostel", price: 180, oldPrice: 350, condition: "Good", seller: "Isha · MANIT", emoji: "🗂️", tone: "rose", location: "Hostel 6" },
  { id: 7, name: "Engineering drawing kit", category: "Books", price: 300, oldPrice: 550, condition: "Good", seller: "Rohan · MANIT", emoji: "📐", tone: "blue", location: "Hostel 3" },
  { id: 8, name: "Badminton racket", category: "Sports", price: 700, oldPrice: 1300, condition: "Great", seller: "Ananya · MANIT", emoji: "🏸", tone: "mint", location: "Hostel 5" },
];

export const categories = ["Everything", "Books", "Electronics", "Hostel", "Sports"];
export const money = (amount) => `₹${amount.toLocaleString("en-IN")}`;

export const steps = [
  { number: "01", icon: "⌕", title: "Find your thing", copy: "Explore useful finds from students right here on campus." },
  { number: "02", icon: "↗", title: "Connect directly", copy: "Message the student seller and agree on a fair price." },
  { number: "03", icon: "✦", title: "Meet & make it yours", copy: "Meet somewhere on campus, swap your item, and go." },
];
