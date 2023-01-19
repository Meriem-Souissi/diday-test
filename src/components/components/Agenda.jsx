import React from "react";

const AgendaItem = ({ item }) => {
  const { day, date, opacity, boxShadow } = item;
  return (
    <div
      className="agenda-item-wraper"
      style={{ opacity: opacity, boxShadow: boxShadow }}
    >
      <p className="agenda-item-day">{day}</p>
      <p className="agenda-item-date">{date}</p>
    </div>
  );
};
const Agenda = () => {
  const agendaArray = [
    { day: "Sam.", date: "9", opacity: "20%", boxShadow: "unset" },
    { day: "Dim.", date: "10", opacity: "40%", boxShadow: "unset" },
    { day: "Lun.", date: "11", opacity: "70%", boxShadow: "unset" },
    {
      day: "Mar.",
      date: "12",
      opacity: "100%",
      boxShadow: "5px 5px 10px #D4E4FF,-5px -5px 10px #FFFFFF"
    },
    { day: "Mer.", date: "13", opacity: "70%", boxShadow: "unset" },
    { day: "Jeu.", date: "14", opacity: "40%", boxShadow: "unset" },
    { day: "Ven.", date: "15", opacity: "20%", boxShadow: "unset" }
  ];
  return (
    <div className="agenda-wrapper">
      {agendaArray.map((item, index) => (
        <AgendaItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Agenda;
