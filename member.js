interface SkillsMember {
    name: string;
    age: number;
    skills: string[];
}

function createSkillsMember(name: string, age: number, skills: string[]): SkillsMember {
    return {
        name,
        age,
        skills,
    };
}

