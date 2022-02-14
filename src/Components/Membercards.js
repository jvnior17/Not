import MembersData from "./Data/TeamMembers;"
import TwitterIcon from '@mui/icons-material/Twitter';
import { Landing } from "./Landing";


export default MemberCard = () => {
    return (
        <div className="card">
        <div className="header-title">{member.name}</div>
        <div className="card-image">
        {MembersData.map((member) => (
          <img src={member.image} alt={member.name} />
        ))}
    </div>
    </div>

    )}
