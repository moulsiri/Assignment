function scheduleMeetings(meetings,rooms){
    meetings.sort((a,b)=>a.start-b.start);
    let res=[];


    for(let m=0;m<meetings.length;m++){
        let flag=false;
        for(let i=0;i<res.length;i++){
            if(meetings[m].start>=res[i][res[i].length-1].end){
                res[i].push(meetings[m]);
                flag=true;
                break;
            }
        }

        if(!flag && res.length<rooms){
            res.push([meetings[m]]);
            flag=true;
        }
        if(!flag){
            console.log("All rooms are filled Hence we can't allot the all meetings")
            return null;
        }
    }
    return res;
    
}


meetings=[
    {start:new Date("2023-05-23T00:26:00+05:30"),end:new Date("2023-05-23T01:27:00+05:30")},
    {start:new Date("2023-05-23T01:33:00+05:30"),end:new Date("2023-05-23T02:08:00+05:30")},
    {start:new Date("2023-05-23T03:09:00+05:30"),end:new Date("2023-05-23T03:41:00+05:30")},
    {start:new Date("2023-05-23T03:23:00+05:30"),end:new Date("2023-05-23T04:36:00+05:30")},
    {start:new Date("2023-05-23T06:54:00+05:30"),end:new Date("2023-05-23T08:10:00+05:30")},
    {start:new Date("2023-05-23T07:40:00+05:30"),end:new Date("2023-05-23T08:56:00+05:30")},
    {start:new Date("2023-05-23T09:08:00+05:30"),end:new Date("2023-05-23T09:34:00+05:30")},
    {start:new Date("2023-05-23T10:17:00+05:30"),end:new Date("2023-05-23T11:03:00+05:30")},
    {start:new Date("2023-05-23T11:02:00+05:30"),end:new Date("2023-05-23T11:57:00+05:30")},
    {start:new Date("2023-05-23T11:24:00+05:30"),end:new Date("2023-05-23T11:55:00+05:30")},
    {start:new Date("2023-05-23T11:48:00+05:30"),end:new Date("2023-05-23T12:45:00+05:30")},
    {start:new Date("2023-05-23T13:09:00+05:30"),end:new Date("2023-05-23T13:32:00+05:30")},
    {start:new Date("2023-05-23T16:06:00+05:30"),end:new Date("2023-05-23T16:46:00+05:30")},
    {start:new Date("2023-05-23T20:44:00+05:30"),end:new Date("2023-05-23T22:08:00+05:30")},
    {start:new Date("2023-05-23T21:48:00+05:30"),end:new Date("2023-05-23T22:21:00+05:30")},
]

console.log(scheduleMeetings(meetings,3))
 