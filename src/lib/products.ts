export type Product = { id: string; name: string; category: string; price: number; image: string; images?: string[]; description: string; badge?: string; sizes?: string[] };
const photo = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
export const products: Product[] = [
 {id:'solitaire-ring',name:'The Solène Ring',category:'Rings',price:148,image:photo('photo-1605100804763-247f67b3557e'),description:'A luminous oval-cut stone set in a delicate, responsibly crafted band. Made to be worn every day, and kept forever.',badge:'Bestseller',sizes:['5','6','7','8','9']},
 {id:'pearl-drop',name:'Pearl Drop Earrings',category:'Earrings',price:96,image:photo('photo-1535632066927-ab7c9ab60908'),description:'Freshwater pearls suspended from sculptural, recycled sterling silver hooks. A little light for every occasion.',badge:'New'},
 {id:'gold-chain',name:'The Heirloom Chain',category:'Necklaces',price:182,image:photo('photo-1611652022419-a9419f74343d'),description:'An everyday 18k gold vermeil chain with a soft, considered weight and a clasp designed to sit just so.'},
 {id:'luna-hoops',name:'Luna Huggie Hoops',category:'Earrings',price:88,image:photo('photo-1617038220319-276d3cfab638'),description:'A softly sculpted pair of gold vermeil huggies. Lightweight, lovely, and always within reach.',badge:'Bestseller'},
 {id:'signet-ring',name:'Petite Signet Ring',category:'Rings',price:124,image:photo('photo-1599643478518-a784e5dc4c8f'),description:'A modern heirloom with a gently curved face and a beautifully polished finish.',sizes:['5','6','7','8','9']},
 {id:'pearl-necklace',name:'Mira Pearl Necklace',category:'Necklaces',price:156,image:photo('photo-1611591437281-460bfbe1220a'),description:'A delicate line of hand-selected freshwater pearls finished with a fine gold clasp.',badge:'New'},
 {id:'cuff-bracelet',name:'Sculpted Cuff',category:'Bracelets',price:132,image:photo('photo-1611591437281-460bfbe1220a'),description:'A fluid, open cuff with an understated glow. Shaped by hand for a comfortable fit.'},
 {id:'keepsake-set',name:'The Keepsake Set',category:'Jewelry Sets',price:210,image:photo('photo-1573408301185-9146fe634ad0'),description:'Our favorite pairing: a delicate pendant and matching stud earrings, beautifully boxed.'},
];
export const categories = ['Shop All','Rings','Necklaces','Earrings','Bracelets','Jewelry Sets'];
