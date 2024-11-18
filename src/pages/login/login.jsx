import Button from '../../components/common/Button';
import InputText from '../../components/common/InputText';
import InputPassword from '../../components/common/Password';
import Link from '../../components/common/Link';
import loginImg from '../../assets/img/login-img.svg';

function login() {

    return (
        <div className='flex items-center justify-center flex-row max-w-screen-lg p-4'>
            <img src={loginImg} alt="Budget App Home Page Illustration" className="h-96 w-96 p-6 mr-6" />
            <div className='bg-cardBg dark:bg-darkCardBg p-12'>
                <h1 className='font-black text-2xl mb-12'>Login</h1>
                <InputText type='text' labelFor='userName' labelName='User Name' inputId='userName' name='User Name' placeholder="Enter User Name" />
                <InputPassword type='password' labelFor='userPassword' labelName='Password' inputId='userPassword' name='Password' placeholder="Enter Password" />
                <Link
                    href="/reset"
                    text="Forgot Password?"
                    tailwindClass="text-xs ml-4"
                />
                <Button text='Login' variant="primary" tailwindClass="w-full mt-12" />
            </div>
        </div>
    )
}

export default login;
