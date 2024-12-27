export default function Funding() {
  const lists = [
    { content: "Visit the Gandee website." },
    {
      content:
        "Select “Première Urgence Internationale” from the suggested associations.",
    },
    { content: "Create and personalize your solidarity kitty." },
    {
      content:
        "Invite your friends and network to take part in the generosity of your solidarity kitty.",
    },
    {
      content:
        "100% of the money raised goes directly to Première Urgence Internationale in an account opened in our name. Donations are tax-deductible, and participants receive their tax receipts.",
    },
  ];

  return (
    <section id="funding" className="flex flex-col gap-10 py-14 px-5% lg:px-25%">
      <header className="w-full flex flex-col items-start gap-4">
        <h2 className="text-xl lg:text-4xl">Crowdfunding</h2>

        <div className="text-xs lg:text-sm text-justify flex flex-col gap-6">
          <p className="">
            Raise funds for Première Urgence Internationale thanks to our
            crowdfunding partner Gandee.
          </p>
        </div>
      </header>

      <div className="flex flex-col gap-4">
        {lists.map((item, index) => (
          <p key={item.content} className="text-sm flex items-start gap-2">
            <b className="font-anton whitespace-nowrap">{index + 1} /</b>{" "}
            {item.content}
          </p>
        ))}
      </div>
    </section>
  );
}
