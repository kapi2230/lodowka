import ScreenWrapper from "../components/ScreenWrapper/ScreenWrapper";

const MainTemplate: React.FC = ({ children }) => {
  return (
    <ScreenWrapper>
      <div>{children}</div>
    </ScreenWrapper>
  );
};

export default MainTemplate;
