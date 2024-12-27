import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-neutral-500/40 hidden lg:grid grid-cols-fit-20 gap-10 py-10 px-5% lg:px-15%"
    >
      <div className="flex flex-1 flex-col gap-6 basis-80 justify-start">
        <article className="flex flex-col gap-2 w-full">
          <h3 className="text-cyan-600 capitalize text-xl">
            Première Urgence Internationale
          </h3>

          <p className="text-sm text-justify">
            Your donations are the guarantee of Première Urgence
            Internationale's freedom to act. For 40 years, we have been
            providing assistance to vulnerable, marginalized, or excluded
            populations in France and internationally, affected by the impacts
            of wars, natural disasters, or economic collapse.
          </p>

          <p className="text-sm text-justify">
            The support you provide us enables us to have a positive impact on
            the lives of 6 million people each year in crisis zones, including
            "forgotten" crises that receive little attention from the media or
            institutional donors.
          </p>

          <p className="text-sm text-justify">
            Thanks to your generosity, we strengthen access to healthcare,
            nutrition, water, hygiene, sanitation, food security, education, and
            more, across 25 different countries, through an integrated approach.
          </p>
        </article>

        <hr />

        <article className="flex flex-col gap-2 w-full">
          <h3 className="text-cyan-600 capitalize text-xl">
            Support us with confidence
          </h3>

          <p className="text-sm text-justify">
            94% of our funds are directly used for our social missions, and the
            remaining 6% is allocated for overhead expenses. Each year, our
            organization undergoes an audit conducted by the SGS ICS firm, which
            attests to the rigor and transparency of our association's
            operations and management. You can access our annual accounts here.
          </p>

          <p className="text-sm text-justify">
            We have been awarded the "DO GOOD" label by GANDEE (2 stars) as a
            result of an audit conducted in 2021. You can consult the rating
            criteria of this label here.
          </p>

          <Image
            alt=""
            width={2000}
            height={2000}
            src="/logo.png"
            className="w-60 mt-10 mb-4 mx-auto object-contain"
          />

          <p className="text-sm text-justify">
            The banking information collected for payment purposes is encrypted
            using SSL protocol and is in no way stored on our computer systems.
          </p>
        </article>
      </div>

      <div className="flex flex-1 flex-col gap-6 basis-80 justify-start">
        <article className="flex flex-col gap-2 w-full">
          <h3 className="text-cyan-600 capitalize text-xl">
            Our Emergency Fund
          </h3>

          <p className="text-sm text-justify">
            Being present in the field for over 40 years, our teams observe that
            the crises endured are becoming long-lasting, generating
            increasingly urgent and sustainable humanitarian needs in contexts
            with weak or even nonexistent media coverage. Fundraising efforts to
            address these growing humanitarian needs are thus becoming
            increasingly challenging.
          </p>

          <p className="text-sm text-justify">
            Our Emergency Fund enables us to enhance our responsiveness and
            effectiveness in assisting the most vulnerable populations. Your
            donations allow us to be present before crises occur in the most
            unstable regions, to carry out our actions with utmost speed during
            crises, and also to remain on-site once the crisis has passed to
            cover the vital needs of our beneficiaries and contribute to
            stabilization and reconstruction efforts.
          </p>
        </article>

        <hr />

        <article className="flex flex-col gap-2 w-full">
          <h3 className="text-cyan-600 capitalize text-xl">
            Protection of your personal data
          </h3>

          <p className="text-sm text-justify">
            The information collected through this form is recorded in a
            computer file by Première Urgence Internationale. It is intended for
            the fundraising department for the purpose of sending your tax
            receipt, providing information about Première Urgence
            Internationale, and appealing for your generosity. This data is not
            transferred to third parties and is retained for the strictly
            necessary period for the aforementioned purposes.
          </p>

          <p className="text-sm text-justify">
            In accordance with the "Information Technology and Liberties" law
            and European regulations, you have the right to object to the use of
            your personal data. You also have the right to access, rectify,
            limit, transfer, or delete your data.
          </p>
        </article>

        <hr />

        <article className="flex flex-col gap-2 w-full">
          <h3 className="text-cyan-600 capitalize text-xl">Contact us</h3>
        </article>
      </div>

      <div className="flex flex-1 flex-col gap-6 basis-80 justify-start">
        <article className="flex flex-col gap-2 w-full">
          <h3 className="text-cyan-600 capitalize text-xl">
            The pooling of donations
          </h3>

          <p className="text-sm text-justify">
            The Emergency Fund allows us to redirect funds if the financial
            needs related to our work with populations affected by a specific
            crisis are fully covered or if operational constraints in the field
            prevent us from maintaining our intervention.
          </p>

          <p className="text-sm text-justify">
            By donating to the Emergency Fund, you place your trust in us and
            enable us to respond wherever the emergency arises, as well as
            redirect funds to address unmet priority needs.
          </p>
        </article>

        <hr />

        <article className="flex flex-col gap-2 w-full">
          <h3 className="text-cyan-600 capitalize text-xl">Tax exemptions</h3>

          <p className="text-sm text-justify">
            If you are a French tax resident liable for income tax, you are
            eligible for a tax deduction of 75% of the amount of your donation,
            up to 1000 euros. Beyond that threshold, the deduction is 66%,
            limited to 20% of your taxable income.
          </p>
        </article>
      </div>
    </section>
  );
}
