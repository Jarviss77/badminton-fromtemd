// Schedule.jsx
import React from "react";

const scheduleData = [
  {
    time: "4 AM",
    courts: [
      { name: "Abbas", type: "booking" },
      { name: "Vinay Hasyan", type: "booking" },
      null,
      null,
      null,
      null,
    ],
  },
  {
    time: "5 AM",
    courts: [
      { name: "Shantanu", type: "booking" },
      { name: "Kailash", type: "payment_pending", items: 6, amount: 300 },
      { name: "Venkatesh", type: "collect_items", items: 6 },
      null,
      null,
      null,
    ],
  },
  {
    time: "6 AM",
    courts: [
      null,
      { name: "Blocked", type: "blocked" },
      null,
      null,
      { name: "Blocked", type: "blocked" },
      { name: "Blocked", type: "blocked" },
    ],
  },
  {
    time: "7 AM",
    courts: [null, null, null, null, null, null],
  },
  {
    time: "8 AM",
    courts: [
      {
        name: "Coaching",
        type: "coaching",
        coach: "Sourav Kumar",
        spots: "4/6",
      },
      { name: "Coaching", type: "coaching", coach: "Puja Minz", spots: "4/6" },
      null,
      null,
      null,
      null,
    ],
  },
  {
    time: "9 AM",
    courts: [null, null, null, null, null, null],
  },
  {
    time: "10 AM",
    courts: [null, null, null, null, null, null],
  },
  {
    time: "11 AM",
    courts: [null, null, null, null, null, null],
  },
  {
    time: "12 PM", // Corrected to PM instead of AM
    courts: [null, null, null, null, null, null],
  },
  {
    time: "1 PM",
    courts: [null, null, null, null, null, null],
  },
  {
    time: "2 PM",
    courts: [null, null, null, null, null, null],
  },
  {
    time: "3 PM",
    courts: [null, null, null, null, null, null],
  },
  {
    time: "4 PM",
    courts: [null, null, null, null, null, null],
  },
];
const Schedule = () => {
  return (
    <>
      <div className="p-6 pb-0.5 border border-zinc-200 rounded-lg overflow-x-auto">
        {/* Header */}
        <div className="grid grid-cols-7 gap-2 bg-gray-200 rounded-lg mb-2">
          <div className="text-center font-medium py-2">Time</div>
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="text-center font-medium py-2">
              Court {i + 1}
            </div>
          ))}
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          <table className="min-w-full border-collapse mb-3">
            <tbody>
              {/* Schedule Rows */}
              {scheduleData.map((slot, index) => (
                <tr key={index} className="even:bg-gray-50">
                  {/* Time Slot */}
                  <td className="border w-[150px] border-zinc-300 px-2 py-2 text-center font-semibold bg-gray-100">
                    {slot.time}
                  </td>

                  {/* Courts */}
                  {slot.courts.map((court, idx) => (
                    <td
                      key={idx}
                      className="border border-zinc-300 px-2 py-2 w-[150px]"
                    >
                      {court ? (
                        <div
                          className={`flex justify-between items-start p-2 rounded-md font-medium truncate ${
                            court.type === "booking"
                              ? "bg-green-100 text-green-800"
                              : court.type === "payment_pending"
                              ? "bg-red-100 text-red-800"
                              : court.type === "collect_items"
                              ? "bg-yellow-100 text-yellow-800"
                              : court.type === "blocked"
                              ? "bg-gray-300 text-gray-700"
                              : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {/* Name and Items */}
                          <div className="flex flex-col">
                            <span className="truncate">{court.name}</span>
                            {court.items && (
                              <span className="text-sm truncate">
                                {court.items} items
                              </span>
                            )}
                          </div>

                          {/* Badge for Amount or Status */}
                          {(court.amount || court.collect) && (
                            <div className="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded-full">
                              {court.amount ? `₹${court.amount}` : "Collect"}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="h-full w-full"></div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Legend */}
      <div className="flex flex-wrap gap-4 text-xs mt-3">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded border bg-yellow-200 mr-2"></div>
          <div>Bookings</div>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded border bg-green-200 mr-2"></div>
          <div>Checked-in</div>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded border bg-blue-200 mr-2"></div>
          <div>Coaching</div>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded border bg-zinc-200 mr-2"></div>
          <div>Blocked/Tournament</div>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded border bg-purple-200 mr-2"></div>
          <div>Completed</div>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded border bg-pink-200 mr-2"></div>
          <div>Pending Payment/Collect Items</div>
        </div>
      </div>
    </>
  );
};
export default Schedule;
