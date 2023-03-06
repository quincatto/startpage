import { FaTwitter } from 'react-icons/fa';

export default function Shortcut() {

    return (
        <>
            <a href="https://twitter.com/" className='flex flex-col items-center border border-surface0 bg-surface0 p-4 rounded'>
                <FaTwitter />
                <h2>Twitter</h2>
            </a>
        </>
    )
}