
const Profile = ({pt}) => {
  return (
    <div className={`pt-${pt}`}>
        <img src="/profile.jpg" alt="Kassio" className="w-64 h-64 rounded-lg object-cover" />
    </div>
  );
};

export default Profile;
