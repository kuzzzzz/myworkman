import styles from '../../styles/Ninjas.module.css'
// import generateRssFeed from "../../utils/generateRSSFeed";
import Link from 'next/link'

// export const getStaticProps = async () => {
// //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
// //   const data = await res.json();
// //  await generateRssFeed();

// //   return {
// //     props: { ninjas: data }
// //   }
// }

const Ninjas = ({ ninjas }) => {
  // console.log(ninjas)

  return (
    <div>
      <h1>Shows</h1>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-work-man-show-ep-one-e1tet6t"
        height="202px"
        width="500px"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
 
export default Ninjas;