
export default function Welcome ({id}: string) {
 return <section className="p-10 m-1 border-solid border-pink-700 border-2">
    <h2 id={`${id}LineOne`} className=" text-xl sm:text-2xl" >Hi, my name is <b>Nico</b></h2>
    <h3 id={`${id}LineTwo`}>I'm a Junior Front End Developer with a passion for inclusion of <i>all</i> users. </h3>
    <h3 className="" id={`${id}LineThree`}>This is my portfolio page.</h3>
    </section>
 
}