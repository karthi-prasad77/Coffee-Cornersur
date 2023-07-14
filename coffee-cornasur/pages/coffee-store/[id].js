import Link from "next/link";
import { useRouter } from "next/router"

const coffeeStore = () => {

  const router = useRouter();
  console.log("Router", router);

  return (
    <div>
      coffeestore {router.query.id}
      <Link href='/'> Back To Home</Link>
    </div>
  )
}

export default coffeeStore