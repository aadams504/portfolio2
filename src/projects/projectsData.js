import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";

const projects = {
  1: {
    title: "eCommerce App",
    image: projectOne,
    description: (
      <>
        <p>
          Customers can sign up/login to account using Google account sign-in or
          email/password combination. Customers are also able to browse products
          by category, add, delete, adjust item quantity in cart, and complete
          purchases using integrated Stripe API.
        </p>
      </>
    ),
    github: "https://github.com/aadams504/comp-clothing",
    demo: "https://papaya-biscochitos-d63991.netlify.app/",
  },
  2: {
    title: "Movie App",
    image: projectTwo,
    description: (
      <>
        <p>
          Users can browse dynamically populated movies by category and view
          information about each including title, synopsis, and ratings pulled
          from IMDB API.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://update-movie-app.vercel.app",
  },
};

export default projects;
