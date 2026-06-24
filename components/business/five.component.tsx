"use client";
import { orbitron, playdisplay } from '@/fonts/font'
import { Check, Minus } from 'lucide-react'
import React from 'react'
import { useIntlayer } from 'next-intlayer';

type Feature = {
  name: string;
  particulier: boolean;
  entreprise: boolean;
}

const FEATURES: Feature[] = [
  { name: "Imagine", particulier: true, entreprise: true },
  { name: "Voice", particulier: true, entreprise: true },
  { name: "FenGEN I", particulier: true, entreprise: true },
  { name: "SOC 2 (Type I & II)", particulier: false, entreprise: true },
  { name: "Role Based Access Control", particulier: false, entreprise: true },
  { name: "Increased rate limits", particulier: true, entreprise: true },
  { name: "No training", particulier: true, entreprise: true },
  { name: "Team + seat management", particulier: false, entreprise: true },
  { name: "Consolidated billing", particulier: false, entreprise: true },
  { name: "Domain Verification", particulier: false, entreprise: true },
  { name: "User analytics", particulier: false, entreprise: true },
  { name: "Custom data retention", particulier: false, entreprise: true },
  { name: "Connectors", particulier: false, entreprise: true },
  { name: "Advanced audit & security controls", particulier: false, entreprise: true },
  { name: "FenGen I Build CLI", particulier: false, entreprise: true },
  { name: "Custom SSO", particulier: false, entreprise: true },
  { name: "Directory Sync (SCIM)", particulier: false, entreprise: true },
  { name: "Custom RBAC", particulier: false, entreprise: true },
  { name: "Advanced User Management", particulier: false, entreprise: true },
  { name: "Dedicated onboarding & support", particulier: false, entreprise: true },
  { name: "Customer-Managed Encryption Keys", particulier: false, entreprise: true },
  { name: "Application-Level Encryption", particulier: false, entreprise: true },
  { name: "Dedicated Data Plane", particulier: false, entreprise: true },
];

const Fivecomponent = () => {
  const content = useIntlayer('fivecomponent');

  const featuresHeaderModels = content.featuresHeaderModels.value;
  const featuresHeaderIndividuals = content.featuresHeaderIndividuals.value;
  const featuresHeaderEnterprise = content.featuresHeaderEnterprise.value;
  const featuresSectionSecurity = content.featuresSectionSecurity.value;

  const SECTIONS = [
    { title: featuresHeaderModels, start: 0, end: 3 },
    { title: featuresSectionSecurity, start: 3, end: FEATURES.length },
  ];

  return (
    <div className='w-full h-full min-h-screen flex flex-col px-15 py-16'>
      <div className="flex items-center gap-x-5 border-b border-b-zinc-400 pb-4">
        <h3 className={`${orbitron.className} text-white text-lg flex-1`}>{featuresHeaderModels}</h3>
        <h3 className={`${orbitron.className} text-white text-lg w-28 text-center`}>{featuresHeaderIndividuals}</h3>
        <h3 className={`${orbitron.className} text-white text-lg w-28 text-center`}>{featuresHeaderEnterprise}</h3>
      </div>

      {SECTIONS.map((section, sIdx) => (
        <React.Fragment key={section.title}>
          {sIdx > 0 && <div className="border-b border-b-zinc-700 my-6" />}
          {sIdx > 0 && (
            <h3 className={`${orbitron.className} text-white text-lg mb-3`}>
              {section.title}
            </h3>
          )}
          {FEATURES.slice(section.start, section.end).map((feature) => (
            <div key={feature.name} className="flex items-center mt-5">
              <p className={`${playdisplay.className} text-white text-sm flex-1`}>
                {feature.name}
              </p>
              <span className="w-28 flex justify-center">
                {feature.particulier ? (
                  <Check color='gray' size={18} />
                ) : (
                  <Minus color='gray' size={18} />
                )}
              </span>
              <span className="w-28 flex justify-center">
                {feature.entreprise ? (
                  <Check color='gray' size={18} />
                ) : (
                  <Minus color='gray' size={18} />
                )}
              </span>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Fivecomponent