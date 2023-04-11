import Section from "./Section";

const sectionsList = [
    {
        hasTiles: true,
        sections: [
            {
                name: "Home",
            },
        ],
    },
];

const Sections = () => {
    return (
        <div className="w-full bg-emerald-300">
            <Section></Section>
        </div>
    );
};

export default Sections;
