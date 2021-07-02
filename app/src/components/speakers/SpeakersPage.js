import React from 'react';
import SpeakersCard from './SpeakersCard';

export default function SpeakersPage() {
  return (
    <div className="max-w-4xl py-16 px-4 sm:px-12 mx-auto">
      <h1 className="pb-12 text-5xl font-bold font-compact">
        <span className="border-b-4 border-primary-600">Speakers</span>
      </h1>
      <div className="my-4">
        <SpeakersCard
          title='"China Biographical Database Project" by Professor Peter K. Bol'
          description='Professor Peter Kees Bol is an American historian and sinologist. He is the Charles H. Carswell Professor of East Asian Languages and Civilizations of Harvard University. This is a recording of his exciting Digital Humanities project, "The China Biographical Database Project", which he presented to the MV Digital Humanities Club.'
          date="January 13th, 2021"
          video="https://www.youtube.com/watch?v=Hhlf-yEO2w8"
        />
        <SpeakersCard
          title='"Seeing through the Cloud" by Professor Kelly O&apos;Neill'
          description='Professor Kelly O&apos;Neill is the director of the Imperiia Project in the Davis Center for Russian and Eurasian Studies at Harvard University. This is a recording of her exciting Digital Humanities project, "Seeing through the Cloud", which she presented to the MV Digital Humanities Club.'
          date="November 12th, 2020"
          video="https://www.youtube.com/watch?v=2INXKmWI8qg"
        />
      </div>
    </div>
  );
}
