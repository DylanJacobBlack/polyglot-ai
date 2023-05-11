import { signIn, signOut, useSession } from "next-auth/react";

const AuthenicateUser: React.FC = () => {
  const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  return (
    <div className="flex flex-col items-center justify-center">
      {!sessionData && (
        <button
          className="rounded-full bg-white/10 px-8 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => void signOut() : () => void signIn()}
        >
          Sign in
        </button>
      )}
    </div>
  );
};

export default AuthenicateUser;
