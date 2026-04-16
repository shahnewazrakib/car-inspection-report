import { Button } from "antd";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black px-6 sm:py-6 py-10">
      <div className="max-w-[1140px] mx-auto space-y-4 sm:space-y-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
          <div className="space-y-1">
            <p className="text-white flex gap-2 items-center font-medium">
              <LuPhone /> Phone
            </p>
            <p>
              <a className="text-white/80 text-sm" href="tel:0406668024">
                0406 668 024
              </a>
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-white flex gap-2 items-center font-medium">
              <MdOutlineEmail size={18} /> Email
            </p>
            <p>
              <a
                className="text-white/80 text-sm"
                href="mailto:info@rideinspect.com.au"
              >
                info@rideinspect.com.au
              </a>
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-white flex gap-2 items-center font-medium">
              <IoLocationOutline size={18} /> Addresses
            </p>
            <div>
              <p className="font-medium text-white">Victoria</p>
              <p className="text-white/80 text-sm">
                Ground floor 470 St Kilda Road Melbourne VIC 3004
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <p className="font-medium text-white">New South Wales</p>
            <p className="text-white/80 text-sm">
              526/368 Sussex St, Sydney <br />
              NSW 2000
            </p>
          </div>
        </div>
        <hr className="border-text" />
        <div className="flex max-sm:flex-col sm:items-center justify-between gap-4">
          <div className="flex sm:items-center gap-3 sm:gap-5 max-sm:flex-col">
            <p className="text-sm text-white">
              © 2025 Ride Inspect. All rights reserved.
            </p>
            <p className="text-white text-sm">
              Developed by{" "}
              <a
                className="text-primary underline-offset-2 hover:underline"
                target="_blank"
                href="https://365websolutions.com.au/"
              >
                365 Web Solutions
              </a>
            </p>
          </div>

          <Button
            target="_blank"
            href="https://rideinspect.com.au"
            icon={<HiOutlineExternalLink />}
        
          >
            Visit Website
          </Button>
        </div>
      </div>
    </footer>
  );
}
