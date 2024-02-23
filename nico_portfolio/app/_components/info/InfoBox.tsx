interface InfoBoxProps {
    information: string;
    id: string;
}

export default function InfoBox ({information, id}: InfoBoxProps) {
 return <section className="p-10 border-lime-90">
    <h2 id={id} className=" text-2xl" >{information}</h2>
    </section>
 
}