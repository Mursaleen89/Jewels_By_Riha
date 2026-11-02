import Link from 'next/link';
export default function Logo({small=false}:{small?:boolean}){return <Link href="/" aria-label="Jewels by Riha home" className={`brand ${small?'brand-small':''}`}><span className="brand-mark"><span className="diamond">◇</span><span className="monogram">JR</span></span><span className="brand-name">JEWELS BY RIHA</span></Link>}
