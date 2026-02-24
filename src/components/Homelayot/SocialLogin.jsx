import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login with</h2>
            <div className="space-y-3 grid grid-cols-1">
                <button className='btn btn-outline btn-secondary'><FcGoogle size={24}></FcGoogle> Login with Google</button>
                <button className='btn btn-outline btn-primary'><FaGithub size={24}></FaGithub> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;