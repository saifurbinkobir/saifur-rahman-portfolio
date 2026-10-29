import { learning, skillGroups } from "@/data/profile";

function ReactMark() {
  return (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="3.5" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="24" cy="24" rx="21" ry="8" />
        <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(60 24 24)" />
        <ellipse cx="24" cy="24" rx="21" ry="8" transform="rotate(120 24 24)" />
      </g>
    </svg>
  );
}

export default function SkillGrid() {
  return (
    <div>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul className="skill-grid">
              {group.skills.map((skill) => (
                <li className="skill-item" key={skill.name}>
                  <span
                    className="skill-mark"
                    style={{ "--skill-color": skill.color, color: skill.color }}
                    aria-hidden="true"
                  >
                    {skill.mark === "react" ? <ReactMark /> : skill.mark}
                  </span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      {learning.length > 0 && (
        <div className="learning-row">
          <span>Currently learning</span>
          <div className="tag-list">
            {learning.map((skill) => (
              <span className="tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
