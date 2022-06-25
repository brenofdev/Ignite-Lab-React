import { HandPointing } from "phosphor-react";

export function ClickOnAnyRoom() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-col items-center gap-4">
        <HandPointing size={150} className="rotate-45 text-gray-300" />
        <h1 className="text-green-300 font-bold text-[30px]">Clique em alguma aula para exibir os detalhes</h1>
      </div>
      
    </div>
  );
}