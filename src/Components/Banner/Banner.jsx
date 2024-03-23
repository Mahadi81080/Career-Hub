
import user from '../../assets/images/user.png'
const Banner = () => {
  return (
    <div className="hero bg-[#f8f9ff] px-12">
      <div className="hero-content flex flex-col lg:flex-row-reverse">
        <img
          src={user}
          className="max-w-md -mb-4"
        />
        <div>
          <h1 className="text-5xl font-bold">One Step <br /> Closer To Your <br /> Dream Job</h1>
          <p className="py-6">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
