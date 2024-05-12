import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute rounded-lg shadow-2xl border-8 border-white right-5 top-1/2" />
                </div>
                <div className='lg:w-1/2 space-y-4 p-4'>
                    <h3 className="text-3xl text-orange-500 font-bold">About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eveniet molestiae fugiat architecto possimus placeat tenetur eligendi nostrum corporis quibusdam, suscipit ipsam vel necessitatibus minima, minus assumenda dolor non aspernatur.</p>
                    <p className="py-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, eveniet molestiae fugiat architecto possimus placeat tenetur eligendi nostrum corporis quibusdam, suscipit ipsam vel necessitatibus minima, minus assumenda dolor non aspernatur.</p>
                    
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;