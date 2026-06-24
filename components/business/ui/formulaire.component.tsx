'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { orbitron } from '@/fonts/font';
import { useIntlayer } from 'next-intlayer';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  companySize: string;
  jobTitle: string;
  licensesMonthly: string;
  licensesAnnual: string;
  needs: string;
}

const Formulairecomponent = () => {
  const content = useIntlayer('sixcomponent');

  const formFirstName = content.formFirstName.value;
  const formLastName = content.formLastName.value;
  const formEmail = content.formEmail.value;
  const formCompany = content.formCompany.value;
  const formCompanySize = content.formCompanySize.value;
  const formCompanySizePlaceholder = content.formCompanySizePlaceholder.value;
  const formJobTitle = content.formJobTitle.value;
  const formLicenses = content.formLicenses.value;
  const formLicensesMonthly = content.formLicensesMonthly.value;
  const formLicensesAnnual = content.formLicensesAnnual.value;
  const formNeeds = content.formNeeds.value;
  const formSubmit = content.formSubmit.value;
  const formPlaceholderFirstName = content.formPlaceholderFirstName.value;
  const formPlaceholderLastName = content.formPlaceholderLastName.value;
  const formPlaceholderEmail = content.formPlaceholderEmail.value;
  const formPlaceholderCompany = content.formPlaceholderCompany.value;
  const formPlaceholderJobTitle = content.formPlaceholderJobTitle.value;
  const formPlaceholderLicenses = content.formPlaceholderLicenses.value;
  const formPlaceholderNeeds = content.formPlaceholderNeeds.value;
  const companySize1 = content.companySize1.value;
  const companySize2 = content.companySize2.value;
  const companySize3 = content.companySize3.value;
  const companySize4 = content.companySize4.value;
  const companySize5 = content.companySize5.value;

  const SIZES = [companySize1, companySize2, companySize3, companySize4, companySize5];

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    companySize: '',
    jobTitle: '',
    licensesMonthly: '',
    licensesAnnual: '',
    needs: '',
  });
  const [sizeOpen, setSizeOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`scroll-mt-20 space-y-6 w-full max-w-2xl mx-auto ${orbitron.className}`} 
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-zinc-400 mb-2 block text-sm">{formFirstName}</label>
          <input
            required
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            placeholder={formPlaceholderFirstName}
          />
        </div>
        <div>
          <label className="text-zinc-400 mb-2 block text-sm">{formLastName}</label>
          <input
            required
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
            placeholder={formPlaceholderLastName}
          />
        </div>
      </div>

      <div>
        <label className="text-zinc-400 mb-2 block text-sm">{formEmail}</label>
        <input
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
          placeholder={formPlaceholderEmail}
        />
      </div>

      <div>
        <label className="text-zinc-400 mb-2 block text-sm">{formCompany}</label>
        <input
          required
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
          placeholder={formPlaceholderCompany}
        />
      </div>

      <div className="relative">
        <label className="text-zinc-400 mb-2 block text-sm">{formCompanySize}</label>
        <button
          type="button"
          onClick={() => setSizeOpen(!sizeOpen)}
          className="flex w-full items-center justify-between rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
        >
          <span className={formData.companySize ? 'text-white' : 'text-zinc-500'}>
            {formData.companySize || formCompanySizePlaceholder}
          </span>
          <ChevronDown 
            size={16} 
            className={`text-zinc-400 transition-transform duration-200 ${sizeOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {sizeOpen && (
          <div className="absolute z-10 mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-900 shadow-xl overflow-hidden">
            {SIZES.map((size) => (
              <button
                key={size}
                type="button"
                onClick={() => {
                  setFormData({ ...formData, companySize: size });
                  setSizeOpen(false);
                }}
                className={`w-full px-4 py-3 text-left text-sm transition-colors duration-150 hover:bg-pink-950/50 ${
                  formData.companySize === size ? 'text-pink-400 bg-pink-950/30' : 'text-zinc-300'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="text-zinc-400 mb-2 block text-sm">{formJobTitle}</label>
        <input
          required
          name="jobTitle"
          type="text"
          value={formData.jobTitle}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
          placeholder={formPlaceholderJobTitle}
        />
      </div>

      <div>
        <label className="text-zinc-400 mb-2 block text-sm">{formLicenses}</label>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div>
            <label className="text-zinc-500 mb-2 block text-xs">{formLicensesMonthly}</label>
            <input
              name="licensesMonthly"
              type="number"
              value={formData.licensesMonthly}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
              placeholder={formPlaceholderLicenses}
            />
          </div>
          <div>
            <label className="text-zinc-500 mb-2 block text-xs">{formLicensesAnnual}</label>
            <input
              name="licensesAnnual"
              type="number"
              value={formData.licensesAnnual}
              onChange={handleChange}
              className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20"
              placeholder={formPlaceholderLicenses}
            />
          </div>
        </div>
      </div>

      <div>
        <label className="text-zinc-400 mb-2 block text-sm">{formNeeds}</label>
        <textarea
          required
          name="needs"
          rows={4}
          value={formData.needs}
          onChange={handleChange}
          className="w-full rounded-xl border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all duration-200 focus:border-pink-500/50 focus:outline-none focus:ring-2 focus:ring-pink-500/20 resize-none"
          placeholder={formPlaceholderNeeds}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-white hover:bg-zinc-400 text-black px-6 py-3 text-sm font-medium transition-colors duration-200 cursor-pointer"
      >
        {formSubmit}
      </button>
    </form>
  )
}

export default Formulairecomponent