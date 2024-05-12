import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          salah satu oraganisasi PMII pertama di kota rembang.
        </h2>
        <p className="text-gray-500 my-2">
          CheckOut website partner kami!! dan program kerja kami!!!
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.jurnaliska.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jurnaliska staika Rembang
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjA8NWFDkJ_jSiAHdUQnxjTiVo1WrkIhbIkfHbbPRTrF8NPh8MJ6jjRldapUzIK8vAaI7tgPpPygystX1q4vu2v2cFQGC-4EL5ryNxW_K3UiC7u1sMUEVxg8MJpbuhM6QxD_sQ0teeUKK_u2kxsUiuE8sthyV41ueGH3OcgP3sC4VuQoRfZ0iUwz6aBCz0z/w1200-h630-p-k-no-nu/IMG-20231030-WA0012.jpg" />
      </div>
    </div>
  );
}
