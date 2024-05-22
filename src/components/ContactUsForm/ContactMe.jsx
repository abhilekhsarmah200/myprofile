import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
} from '@mui/material';

export const ContactMe = () => {
  const form = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [contact, setContact] = useState('');
  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(false);

  const [scheduleTalk, setScheduleTalk] = useState(false);
  const [discussProject, setDiscussProject] = useState(false);

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    website: '',
    contact: '',
    profile: '',
  });

  const radioText = [
    {
      title: 'Schedule a time to talk',
      state: scheduleTalk,
      setState: setScheduleTalk,
    },
    {
      title: 'Discuss a job or project',
      state: discussProject,
      setState: setDiscussProject,
    },
  ];

  const validate = () => {
    let tempErrors = {
      name: '',
      email: '',
      website: '',
      contact: '',
      profile: '',
    };
    let isValid = true;

    if (!name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }
    if (!email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }
    if (!contact.trim()) {
      tempErrors.contact = 'Contact number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(contact)) {
      tempErrors.contact = 'Contact number must be 10 digits';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const serviceId = 'service_tt1qezl';
    const templateId = 'template_ud5isoi';
    const publicKey = 'p9LfPtFxcWiFfYsgy';

    const templateParam = {
      from_name: name,
      from_email: email,
      reply_to: email,
      to_name: 'Abhilekh',
      website: website,
      contact: contact,
      profile: profile,
      schedule_talk: scheduleTalk ? 'Schedule a time to talk' : '',
      discuss_project: discussProject ? 'Discuss a job or project' : '',
    };

    console.log({ scheduleTalk }, { discussProject }, { templateParam });

    emailjs.send(serviceId, templateId, templateParam, publicKey).then(
      (res) => {
        setTimeout(() => {
          console.log('SUCCESS!', res);
          setLoading(false);
          setName('');
          setEmail('');
          setWebsite('');
          setContact('');
          setProfile('');
          setScheduleTalk(false);
          setDiscussProject(false);
          setErrors({
            name: '',
            email: '',
            website: '',
            contact: '',
            profile: '',
          });
        }, 2000);
      },
      (error) => {
        console.log('FAILED...', error.text);
        setLoading(false);
      }
    );
  };

  return (
    <div className='lg:mx-[9rem] sm:mx-[4rem] mx-[2rem] md:mt-4 mt-2'>
      <div className='md:text-3xl text-2xl font-bold'>Contact Form</div>
      <div className='my-2 md:text-[1rem] text-[0.8rem]'>
        Please complete the form below so I can help you:
      </div>
      <div className='border bg-white rounded-lg pt-10'>
        <form
          className='w-[100%] flex flex-wrap mx-auto gap-4 px-[2rem]'
          onSubmit={sendEmail}
        >
          <div className='md:text-2xl text-xl font-bold'>Hi Abhilekh,</div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full md:text-[1rem] text-[0.8rem]'>
            <div className='w-full flex md:flex-row flex-col gap-2 md:items-center items-start'>
              <div className='w-[10%]'>I am</div>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                name='user_name'
                label='Your Name'
                sx={{ width: '100%' }}
                error={!!errors.name}
                helperText={errors.name}
              />
            </div>
            <div className='w-full flex md:flex-row flex-col gap-2 md:items-center items-start'>
              <div className='w-[10%]'>from</div>
              <TextField
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                type='text'
                name='website'
                label='Company Name'
                sx={{ width: '100%' }}
                error={!!errors.website}
                helperText={errors.website}
              />
            </div>
          </div>
          <div className='mt-2'>
            <div className=' md:text-[1rem] text-[0.8rem]'>
              I am contacting you because * :{' '}
            </div>
            <div className='text-gray-400 md:text-[0.8rem] text-[0.6rem]'>
              Tell me why you are reaching out:
            </div>
            {radioText.map((item, index) => (
              <div
                key={index}
                className='flex items-center md:text-[1rem] text-[0.8rem]'
              >
                <FormControlLabel
                  className='md:text-[1rem] text-[0.8rem]'
                  control={
                    <Checkbox
                      checked={item.state}
                      onChange={(e) => item.setState(e.target.checked)}
                    />
                  }
                  label={item?.title}
                />
              </div>
            ))}
          </div>
          <div className='w-full flex md:flex-row flex-col md:items-center items-start gap-2 pb-[2rem]  md:text-[1rem] text-[0.8rem]'>
            <div className='md:w-1/2 w-full'>
              <div className='w-full mt-2'>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  name='user_email'
                  label='Your Email*'
                  sx={{ width: '100%' }}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </div>
              <div className='w-full mt-2'>
                <TextField
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type='tel'
                  name='user_contact'
                  label='Phone*'
                  sx={{ width: '100%' }}
                  error={!!errors.contact}
                  helperText={errors.contact}
                />
              </div>
              <div className='w-full mt-2'>
                <TextField
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  type='text'
                  name='user_profile'
                  label='Your Profile'
                  sx={{ width: '100%' }}
                  error={!!errors.profile}
                  helperText={errors.profile}
                />
              </div>
            </div>
            <div className='md:w-1/2 w-full md:ml-[4rem]'>
              <div>Looking forward to hearing from you!</div>
              <div
                className='uppercase'
                onChange={(e) => setName(e.target.value)}
              >
                {name}
              </div>
              <div className='w-full text-center py-[1rem]'>
                <Button
                  type='submit'
                  className='w-full rounded-xl'
                  variant='contained'
                  disabled={loading}
                >
                  {loading ? <CircularProgress size={24} /> : 'Submit'}
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
