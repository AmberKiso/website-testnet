import { useState } from 'react'
import type { Dispatch, SetStateAction, ChangeEvent } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import { CountryWithCode, countries } from '../data/countries'
import LoginCTA from '../components/signup/LoginCTA'
import Note from '../components/signup/Note'
import FinePrint from '../components/signup/FinePrint'
import LabelledRow from '../components/signup/LabelledRow'
import TextField from '../components/signup/TextField'

const FIELDS = [
  { id: 'email', label: 'Email', placeholder: 'Your email' },
  { id: 'graffiti', label: 'Graffiti', placeholder: 'Your tag' },
  { id: 'social', label: 'Discord or Telegram', placeholder: 'Your proof' },
]

const trigger = (fn: Dispatch<SetStateAction<string>>) => (e: ChangeEvent) => {
  const value = (e.target as HTMLInputElement).value
  fn(value)
}

// naive validators
const UNSET = 'UNSET'
const validateEmail = (x: string) => {
  const dot = x.indexOf('.')
  return x.indexOf('@') > 0 && dot > 0 && dot !== x.length - 1
}
const exists = (x: string) => x !== UNSET && x.trim().length > 0

const DEFAULT_TOUCHED_STATE: Record<string, boolean> = {
  email: false,
  graffiti: false,
  social: false,
}

export default function SignUp() {
  const [$email, $setEmail] = useState<string>(UNSET)
  const [$graffiti, $setGraffiti] = useState<string>(UNSET)
  const [$social, $setSocial] = useState<string>(UNSET)
  const [$country, $setCountry] = useState<string>('USA')
  const [$fields, $fieldToucher] = useState<Record<string, boolean>>(
    DEFAULT_TOUCHED_STATE
  )
  const touch = (key: string) => () =>
    $fieldToucher({ ...$fields, [key]: true })
  const setEmail = trigger($setEmail)
  const setGraffiti = trigger($setGraffiti)
  const setSocial = trigger($setSocial)
  const setCountry = trigger($setCountry)
  const countryNote = $country === 'USA'
  const validEmail = exists($email) && validateEmail($email)
  const validGraffiti = exists($graffiti)
  const validSocial = exists($social)

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Sign up</title>
        <meta name="description" content="Sign up" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar fill="black" className="bg-ifpink text-black" />
      <main className="bg-ifpink flex-1 font-extended">
        <section className="offset-box z-10 w-4/5 flex flex-col m-auto py-8 px-2 md:px-4 h-auto mb-16 border-opacity-100 border-2 border-solid border-black bg-white items-center mt-8">
          <h1 className="text-2xl text-center mb-8">
            Sign up and get incentivized.
          </h1>
          {FIELDS.map(field => ({
            ...field,
            touched: $fields[field.id],
            onBlur: touch(field.id),
            ...(field.id === 'email'
              ? { value: $email, setter: setEmail, valid: validEmail }
              : field.id === 'graffiti'
              ? {
                  value: $graffiti,
                  setter: setGraffiti,
                  valid: validGraffiti,
                }
              : { value: $social, setter: setSocial, valid: validSocial }),
          })).map(props => (
            <TextField {...props} key={props.id} />
          ))}
          <LabelledRow key="country" id="country" label="Country" valid>
            <select onChange={setCountry} value={$country}>
              {countries.map(({ code, name }: CountryWithCode) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </LabelledRow>
          {countryNote && <Note />}
          <Button className="w-11/12 sm:w-7/12 mb-4 text-md md:text-lg">
            Sign Up
          </Button>
          <FinePrint />
          <LoginCTA />
        </section>
      </main>
      <Footer />
    </div>
  )
}