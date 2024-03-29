import styles from "../../styles/Ninjas.module.css";
// import generateRssFeed from "../../utils/generateRSSFeed";
import Link from "next/link";

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
        src="https://podcasters.spotify.com/pod/show/myworkman/embed/episodes/My-work-man-Show-Ep-16-e235udn"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://podcasters.spotify.com/pod/show/myworkman/embed/episodes/My-Work-Man-Show-Ep-15-e22dkii"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://podcasters.spotify.com/pod/show/myworkman/embed/episodes/My-Work-Man-Show-Ep-14-e22c5q2"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://podcasters.spotify.com/pod/show/myworkman/embed/episodes/My-Work-Man-Show-Ep-13-e21v8ib"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://podcasters.spotify.com/pod/show/myworkman/embed/episodes/My-Work-Man-Show-Ep-12-e21g5cd"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://podcasters.spotify.com/pod/show/myworkman/embed/episodes/My-Work-Man-Show-Ep-11-e212pck"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://podcasters.spotify.com/pod/show/myworkman/embed/episodes/My-Work-Man-Show-Ep-X-e20kni2"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://podcasters.spotify.com/pod/show/myworkman/embed/episodes/My-Work-Man-Show-Ep-IX-e206pvg"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-Work-Man-Show-Ep-VIII-e1vqp0t"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-Work-Man-Show-Ep-VII-e1vfj7d/a-a9cvipo"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-Work-Man-Show-Ep-VI-e1v4jrc"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-Work-Man-Show-Ep-V-e1up5eu"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-Work-Man-Show-Ep-IV-e1udt4d"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-Work-Man-Show-Ep-III-e1u3qus"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-Work-Man-Show-Ep-II-e1tp43t/a-a975gj0"
        height="120px"
        width="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
      <iframe
        src="https://anchor.fm/myworkman/embed/episodes/My-work-man-show-ep-one-e1tet6t"
        height="120px"
        width="500px"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
};

export default Ninjas;
