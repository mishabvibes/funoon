import React, { useState } from 'react';
import { useResults } from "../../../context/DataContext";
import { Trophy, Medal, ChevronRight, Award, Star, TrendingUp } from "lucide-react";
import TeamAchievements from '../TeamAchievements/TeamAchievements';

// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../FrameMotion/variants'


const ScoreBoard = () => {
  const { results, uniquePrograms, groupPrograms, singlePrograms } = useResults();
  const teamNames = ["ALEXANDRIA", "SHATIBIYA", "MADIYA", "SHAMIYA", "IJAZIYYA", "KAZIMIYYA"];
  const [activeTeam, setActiveTeam] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState(null);

  const getTotalPointsForTeam = (team) => {
    const teamResults = results.filter(
      (result) => result.teamName.toUpperCase() === team
    );
    return teamResults.reduce((total, curr) => total + curr.points, 0);
  };

  const getMedalCount = (team) => {
    const teamResults = results.filter(
      (result) => result.teamName.toUpperCase() === team
    );
    return {
      gold: teamResults.filter(r => r.prize?.toLowerCase() === "first").length,
      silver: teamResults.filter(r => r.prize?.toLowerCase() === "second").length,
      bronze: teamResults.filter(r => r.prize?.toLowerCase() === "third").length,
      total: teamResults.length
    };
  };

  const TeamCard = ({ team }) => {
    const medals = getMedalCount(team);
    const totalPoints = getTotalPointsForTeam(team);
    const isActive = activeTeam === team;

    return (
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        onClick={() => { setActiveTeam(isActive ? null : team), setSelectedTeam(team) }}
        className={`${isActive ? 'ring-0' : ''
          } bg-white dark:bg-[#2D2D2D] rounded-xl shadow-lg p-4  hover:shadow-xl cursor-pointer`}
      >
        <div

          className="flex flex-col space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200">
              {team}
            </h3>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">{totalPoints}</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              {medals.gold > 0 && (
                <div className="flex items-center" title="Gold Medals">
                  <span className="text-xl">🥇</span>
                  <span className="text-xs font-bold ml-1">{medals.gold}</span>
                </div>
              )}
              {medals.silver > 0 && (
                <div className="flex items-center" title="Silver Medals">
                  <span className="text-xl">🥈</span>
                  <span className="text-xs font-bold ml-1">{medals.silver}</span>
                </div>
              )}
              {medals.bronze > 0 && (
                <div className="flex items-center" title="Bronze Medals">
                  <span className="text-xl">🥉</span>
                  <span className="text-xs font-bold ml-1">{medals.bronze}</span>
                </div>
              )}
            </div>
            <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
          </div>
        </div>
      </motion.div>
    );
  };




  const [expandedProgram, setExpandedProgram] = useState(null);

  // const MobileScoreCard = ({ program, teamResults }) => {
  //   const isExpanded = expandedProgram === program;
  //   const totalPoints = teamResults.reduce((sum, result) => sum + result.points, 0);
  //   const medalCounts = {
  //     first: teamResults.filter(r => r.prize?.toLowerCase() === 'first').length,
  //     second: teamResults.filter(r => r.prize?.toLowerCase() === 'second').length,
  //     third: teamResults.filter(r => r.prize?.toLowerCase() === 'third').length,
  //   };

  //   return (
  //     <motion.div
  //       initial={false}
  //       animate={{ backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.05)' : 'transparent' }}
  //       className="bg-white dark:bg-[#2D2D2D] rounded-lg shadow-md mb-4 overflow-hidden"
  //     >
  //       <div
  //         className={`flex justify-between items-center p-4 cursor-pointer transition-all duration-300 
  //           ${isExpanded ? 'bg-gradient-to-r from-secondery/10 to-red-800/10' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
  //         onClick={() => setExpandedProgram(isExpanded ? null : program)}
  //       >
  //         <div className="flex items-center space-x-3">
  //           <Trophy className={`w-5 h-5 transition-colors duration-300 
  //             ${isExpanded ? 'text-secondery' : 'text-gray-400'}`} />
  //           <div className="flex flex-col">
  //             <span className={`font-semibold transition-colors duration-300 
  //               ${isExpanded ? 'text-secondery' : ''}`}>
  //               {program}
  //             </span>
  //             <div className="flex items-center space-x-2 text-sm text-gray-500">
  //             </div>
  //           </div>
  //         </div>
  //         <div className="flex items-center space-x-2">
  //           <ChevronRight 
  //             className={`w-5 h-5 transition-all duration-300 
  //               ${isExpanded ? 'rotate-90 text-secondery' : 'text-gray-400'}`} 
  //           />
  //         </div>
  //       </div>

  //       <motion.div
  //         initial={false}
  //         animate={{
  //           height: isExpanded ? 'auto' : 0,
  //           opacity: isExpanded ? 1 : 0
  //         }}
  //         transition={{
  //           duration: 0.3,
  //           ease: "easeInOut"
  //         }}
  //         className="overflow-hidden bg-gray-50 dark:bg-[#2D2D2D]"
  //       >
  //         {teamNames.map((team, index) => {
  //           const result = teamResults.find(r => r.teamName.toUpperCase() === team);
  //           if (!result) return null;

  //           return (
  //             <motion.div
  //               initial={{ opacity: 0, x: -20 }}
  //               animate={{ opacity: 1, x: 0 }}
  //               transition={{ delay: index * 0.1 }}
  //               key={team}
  //               className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 
  //                 flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 
  //                 transition-colors duration-200"
  //             >
  //               <div className="flex items-center space-x-2">
  //                 <span className="font-medium text-gray-700 dark:text-gray-300">{team}</span>
  //               </div>
  //               <div className="flex items-center space-x-3">
  //                 <span className="font-semibold text-gray-900 dark:text-gray-100">
  //                   {result.points}
  //                 </span>
  //                 {result.prize && (
  //                   <span className="text-lg transform hover:scale-110 transition-transform">
  //                     {result.prize.toLowerCase() === 'first' && '🥇'}
  //                     {result.prize.toLowerCase() === 'second' && '🥈'}
  //                     {result.prize.toLowerCase() === 'third' && '🥉'}
  //                   </span>
  //                 )}
  //               </div>
  //             </motion.div>
  //           );
  //         })}
  //       </motion.div>
  //     </motion.div>
  //   );
  // };


  

const MobileScoreCard = ({ program, teamResults }) => {
  const isExpanded = expandedProgram === program;
  const totalPoints = teamResults.reduce((sum, result) => sum + result.points, 0);

  return (
    <motion.div
      initial={false}
      animate={{ backgroundColor: isExpanded ? 'rgba(255, 255, 255, 0.05)' : 'transparent' }}
      className="bg-white dark:bg-[#2D2D2D] rounded-lg shadow-md mb-4 overflow-hidden"
    >
      {/* Header remains the same */}
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${isExpanded ? 'bg-gradient-to-r from-secondery/10 to-red-800/10' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
          }`}
        onClick={() => setExpandedProgram(isExpanded ? null : program)}
      >
        <div className="flex items-center space-x-3">
          <Trophy className={`w-5 h-5 transition-colors duration-300 
             ${isExpanded ? 'text-secondery' : 'text-gray-400'}`} />
          <div className="flex flex-col">
            <span className={`font-semibold transition-colors duration-300 
               ${isExpanded ? 'text-secondery' : ''}`}>
              {program}
            </span>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isExpanded ? 'auto' : 0,
          opacity: isExpanded ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden bg-gray-50 dark:bg-[#2D2D2D]"
      >
        {teamNames.map((team, index) => {
          const teamResults = results.filter(r =>
            r.teamName.toUpperCase() === team &&
            r.programName.toUpperCase() === program.toUpperCase()
          );

          if (teamResults.length === 0) return null;

          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              key={team}
              className="px-4 py-3 border-t border-gray-100 dark:border-gray-700 
                flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700 dark:text-gray-300">{team}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-end gap-1">
                  {teamResults.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900 dark:text-gray-100">
                        {result.points}
                      </span>
                      {result.prize && (
                        <span className="text-lg transform hover:scale-110 transition-transform">
                          {result.prize.toLowerCase() === 'first' && '🥇'}
                          {result.prize.toLowerCase() === 'second' && '🥈'}
                          {result.prize.toLowerCase() === 'third' && '🥉'}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

  const renderMobileView = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {teamNames.map(team => (
          <TeamCard key={team} team={team} />
        ))}
      </div>

      <div className="space-y-4">
        {['Single Programs', 'Group Programs'].map(section => (
          <div key={section} className="space-y-2">
            <button
              onClick={() => setExpandedSection(expandedSection === section ? null : section)}
              className="w-full flex justify-between items-center p-4 bg-gradient-to-r from-secondery to-red-800 rounded-lg text-white font-semibold"
            >
              <span>{section}</span>
              <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${expandedSection === section ? 'rotate-90' : ''}`} />
            </button>

            <div className={`transition-all duration-500 ${expandedSection === section ? 'opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
              {(section === 'Single Programs' ? uniquePrograms : groupPrograms).map(program => {
                const programResults = results.filter(
                  result => result.programName.toUpperCase() === program.toUpperCase()
                );
                return (
                  <MobileScoreCard
                    key={program}
                    program={program}
                    teamResults={programResults}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDesktopView = () => (
    <div className="overflow-x-auto shadow-lg rounded-lg bg-white dark:bg-gray-800">
      <table className="table-auto w-full border-collapse text-sm sm:text-base">
        <thead>
          <tr className="bg-gradient-to-r from-secondery to-red-800 text-white">
            <th className="px-4 py-4 text-left">PROGRAM NAME</th>
            {teamNames.map((team) => (
              <th key={team} className="px-4 py-4 text-center">{team}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {[...singlePrograms, ...uniquePrograms, ...groupPrograms].map(program => (
            <tr key={program} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
              <td className="px-4 py-3 font-semibold text-blue-600 dark:text-blue-300">
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4" />
                  <span>{program.toUpperCase()}</span>
                </div>
              </td>
              {teamNames.map(team => {
                const teamResults = results.filter(
                  r => r.programName.toUpperCase() === program.toUpperCase() &&
                    r.teamName.toUpperCase() === team
                );

                return (
                  <td key={team} className="px-4 py-3 text-center">
                    {teamResults.length > 0 ? (
                      <div className="flex flex-col items-center gap-1">
                        {teamResults.map((result, idx) => (
                          <div key={idx} className="flex items-center justify-center space-x-2">
                            <span className="font-medium">{result.points}</span>
                            {result.prize && (
                              <span className="text-lg transform hover:scale-110 transition-transform">
                                {result.prize.toLowerCase() === 'first' && '🥇'}
                                {result.prize.toLowerCase() === 'second' && '🥈'}
                                {result.prize.toLowerCase() === 'third' && '🥉'}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-400">-</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
          <tr className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 font-bold">
            <td className="px-4 py-4">TOTAL</td>
            {teamNames.map(team => (
              <td key={team} className="px-4 py-4 text-center text-lg text-blue-600 dark:text-blue-300">
                {getTotalPointsForTeam(team)}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 md:px-12">
      {selectedTeam ? (
        <TeamAchievements
          teamName={selectedTeam}
          onBack={() => setSelectedTeam(null)}
        />
      ) : (
        <>
          <div className="flex flex-col items-center mb-8 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 text-center">
              <span className="flex items-center justify-center space-x-3">
                <Medal className="w-8 h-8 text-secondery" />
                <span>SCOREBOARD</span>
                <Medal className="w-8 h-8 text-secondery" />
              </span>
            </h1>
          </div>

          {/* Mobile view */}
          <div className="md:hidden h-auto">
            {renderMobileView()}
          </div>

          {/* Desktop view */}
          <div className="hidden md:block">
            {renderDesktopView()}
          </div>
        </>
      )}
    </div>
  );
};

export default ScoreBoard;












