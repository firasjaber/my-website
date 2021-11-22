import {
  AdobeAiIcon,
  AdobePsIcon,
  AdobexdIcon,
  AwsIcon,
  AzureIcon,
  CsharpIcon,
  CssIcon,
  DockerIcon,
  DotnetIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GraphqlIcon,
  HtmlIcon,
  JavaIcon,
  JsIcon,
  LinuxIcon,
  MongoIcon,
  MysqlIcon,
  NextjsIcon,
  NginxIcon,
  NodeIcon,
  OracledbIcon,
  PhpIcon,
  PostgresIcon,
  ReactIcon,
  RedisIcon,
  SymfonyIcon,
  TsIcon,
} from 'components/icons/DevIcons';
import Link from 'next/link';
import { PageLayout } from 'components/PageLayout';

export default function Home() {
  return (
    <PageLayout>
      <h1 className='font-varella font-bold tracking-wide text-2xl sm:text-3xl'>
        Hey, I&apos;m Firas Jaber ✌️
      </h1>
      <p className='mt-2 text-gray-300 font-varella'>
        i&apos;m a 20 years old developer and designer from Tunisia. I am
        interested in software development, architecture, computer networking,
        and design. I enjoy each process of building a product, from conception
        to deployment.
      </p>
      <hr className='my-8 opacity-40' />
      <h2 className='font-varella font-bold tracking-wide text-xl'>
        Technical skills
      </h2>
      <p className='mt-2 text-gray-300 font-varella'>
        Here is a list of tools and languages that I am proficient with and used
        in previous projects :
      </p>
      <div className='mt-6 space-y-6'>
        <div>
          <h3 className='mb-4 font-varella font-bold tracking-wide'>
            Programming Languages :
          </h3>
          <div className='m-2 grid grid-cols-auto-fit md:grid-cols-4  gap-4'>
            <Tech icon={<JsIcon />} name='Javascript' />
            <Tech icon={<TsIcon />} name='Typescript' />
            <Tech icon={<JavaIcon />} name='Java' />
            <Tech icon={<PhpIcon />} name='PHP' />
            <Tech icon={<CsharpIcon />} name='C#' />
          </div>
        </div>
        <div>
          <h3 className='mb-4 font-varella font-bold tracking-wide'>
            Frontend Technologies :
          </h3>
          <div className='m-2 grid grid-cols-auto-fit md:grid-cols-4  gap-4'>
            <Tech icon={<HtmlIcon />} name='HTML' />
            <Tech icon={<CssIcon />} name='CSS' />
            <Tech icon={<ReactIcon />} name='Reactjs' />
            <Tech icon={<NextjsIcon />} name='Nextjs' />
          </div>
        </div>
        <div>
          <h3 className='mb-4 font-varella font-bold tracking-wide'>
            Backend Technologies :
          </h3>
          <div className='m-2 grid grid-cols-auto-fit md:grid-cols-4  gap-4'>
            <Tech icon={<NodeIcon />} name='Nodejs' />
            <Tech icon={<RedisIcon />} name='Redis' />
            <Tech icon={<GraphqlIcon />} name='GraphQL' />
            <Tech icon={<DotnetIcon />} name='ASP.NET' />
            <Tech icon={<SymfonyIcon />} name='Symfony' />
            <Tech icon={<FirebaseIcon />} name='Firebase' />
          </div>
        </div>
        <div>
          <h3 className='mb-4 font-varella font-bold tracking-wide'>
            Devops and Misc. tools :
          </h3>
          <div className='m-2 grid grid-cols-auto-fit md:grid-cols-4  gap-4'>
            <Tech icon={<DockerIcon />} name='Docker' />
            <Tech icon={<LinuxIcon />} name='Linux' />
            <Tech icon={<NginxIcon />} name='NGINX' />
            <Tech icon={<GitIcon />} name='Git' />
            <Tech icon={<AwsIcon />} name='AWS' />
            <Tech icon={<AzureIcon />} name='Azure' />
          </div>
        </div>
        <div>
          <h3 className='mb-4 font-varella font-bold tracking-wide'>
            Databases :
          </h3>
          <div className='m-2 grid grid-cols-auto-fit md:grid-cols-4  gap-4'>
            <Tech icon={<PostgresIcon />} name='PostgresQL' />
            <Tech icon={<MongoIcon />} name='MongoDB' />
            <Tech icon={<MysqlIcon />} name='MySQL' />
            <Tech icon={<OracledbIcon />} name='OracleDB' />
          </div>
        </div>
        <div>
          <h3 className='mb-4 font-varella font-bold tracking-wide'>
            Design :
          </h3>
          <div className='m-2 grid grid-cols-auto-fit md:grid-cols-4  gap-4'>
            <Tech icon={<FigmaIcon />} name='Figma' />
            <Tech icon={<AdobexdIcon />} name='Adobe XD' />
            <Tech icon={<AdobePsIcon />} name='Adobe PS' />
            <Tech icon={<AdobeAiIcon />} name='Adobe AI' />
          </div>
        </div>
      </div>
      <p className='mt-10 text-gray-300 font-varella'>
        You can also check my{' '}
        <span className='underline hover:text-gray-100 transition-all ease-in-out'>
          <Link href='/work'>work &#8599;</Link>
        </span>{' '}
        experience , and some of the{' '}
        <span className='underline hover:text-gray-100 transition-all ease-in-out'>
          <Link href='/projects'>projects &#8599;</Link>
        </span>{' '}
        i have worked on.
      </p>
    </PageLayout>
  );
}
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
