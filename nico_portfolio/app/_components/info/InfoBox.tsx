interface InfoBoxProps {
    information: string;
    id: string;
}

export default function InfoBox ({information, id}: InfoBoxProps) {
 return <section className="p-10 m-1 border-solid border-pink-700 border-2">
    <h2 id={id} className=" text-xl sm:text-2xl" >{information}</h2>
    </section>
 
}