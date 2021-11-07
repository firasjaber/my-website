interface TechProps {
  icon: any;
  name: string;
}
const Tech = ({ icon, name }: TechProps) => {
  return (
    <div className='flex items-center space-x-3  text-gray-200 font-thin text-sm font-mono'>
      {icon}
      <div> {name} </div>
    </div>
  );
};

export default Tech;
