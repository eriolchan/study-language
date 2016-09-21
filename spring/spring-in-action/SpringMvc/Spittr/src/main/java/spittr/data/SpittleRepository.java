package spittr.data;

import java.util.List;

import spittr.Spittle;

public interface SpittleRepository {

    List<Spittle> findRecentSpittles();
    
    List<Spittle> findSpittles(long max, int count);
    
    Spittle findOne(long spittleId);
    
    Spittle save(Spittle spittle);
}
