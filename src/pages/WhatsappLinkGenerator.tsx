import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { generateWhatsAppLink } from '../util/Index';

const WhatsAppGenerator: React.FC = () => {
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');


  const { t } = useTranslation();
  const countryOptions = [
    { code: "93", name: `${t("countries.AF")}` },
    { code: "1", name: `${t("countries.US")}` },
    { code: "98", name: `${t("countries.IR")}` },
  ];

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{t('whatsapp-link-generator.titr')}</h1>

      <div className="mb-4">
        <label htmlFor="country" className="block font-medium mb-2">{t('whatsapp-link-generator.country')}</label>
        <select
          id="country"
          className="select select-bordered"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        >
            {countryOptions.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name} (+{country.code})
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="phone-number" className="block font-medium mb-2">{t('whatsapp-link-generator.phoneNumber')}</label>
        <input
          id="phone-number"
          type="tel"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={t('whatsapp-link-generator.phoneNumberPlaceholder')}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-2">{t('whatsapp-link-generator.message')}</label>
        <textarea
          id="message"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder={t('whatsapp-link-generator.messagePlaceholder')}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <p className="font-medium">{t('whatsapp-link-generator.link')}</p>
        <a
          href={generateWhatsAppLink(countryCode,phoneNumber,message)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-500 hover:text-indigo-600"
        >
          {generateWhatsAppLink(countryCode,phoneNumber,message)}
        </a>
      </div>
    </div>
  );
};

export default WhatsAppGenerator;