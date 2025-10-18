import { RecoilRoot, useRecoilValue } from "recoil";
import { jobAtom, messsagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobAtom);
  const messagingAtomCount = useRecoilValue(messsagingAtom);
  const notificationsAtomCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>Home</button>

      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount}) </button>
      <button>Messaging ({messagingAtomCount}) </button>
      <button>Notifications ({notificationsAtomCount }) </button>

      <button>Me {totalNotificationCount}</button>
    </>
  );
}

export default App;
