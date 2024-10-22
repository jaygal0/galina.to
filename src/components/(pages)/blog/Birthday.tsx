import Link from "next/link";

export default function Birthday() {
  return (
    <>
      <div className="mt-10 font-bold"> All birthday posts</div>
      <div className="flex gap-4">
        <Link href="/blog/32">32</Link>
        <div>/</div>
        <Link href="/blog/33">33</Link>
        <div>/</div>
        <Link href="/blog/34">34</Link>
        <div>/</div>
        <Link href="/blog/35">35</Link>
        {/* <div>/</div> */}
        {/* <Link href="/blog/36">36 /</Link> */}
        {/* <div>/</div> */}
        {/* <Link href="/blog/37">37 /</Link> */}
        {/* <div>/</div> */}
        {/* <Link href="/blog/38">38 /</Link> */}
        {/* <div>/</div> */}
        {/* <Link href="/blog/39">39 /</Link> */}
        {/* <div>/</div> */}
        {/* <Link href="/blog/40">40 /</Link> */}
      </div>
    </>
  );
}
