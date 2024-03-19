import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500 border-2'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span>Digital Horizons</span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                
              <Footer.Link href='#'>Github</Footer.Link>
               
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="Digital Horizons"
            year={new Date().getFullYear()}
          />
          
        </div>
      </div>
    </Footer>
  );
}
